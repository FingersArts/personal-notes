import React from "react";
import { getInitialData } from "../utils/index";
import Header from "./Header";
import List from "./ItemList";
import Input from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchCatatan: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.searchNotes = this.searchNotes.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        prevState: prevState.notes.map((note) =>
          note.id === id ? (note.archived = !note.archived) : note
        ),
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState({
      searchCatatan: event.target.value,
    });
  }

  searchNotes() {
    const { notes, searchCatatan } = this.state;
    return notes.filter((note) =>
      note.title.toLowerCase().includes(searchCatatan.toLowerCase())
    );
  }
  render() {
    return (
      <div className="note-app">
        <Header
          inputSearch={this.state.searchCatatan}
          onSearch={this.onSearchHandler}
        />
        <div className="note-app__body">
          <Input addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <List
            key={activeNotes.id}
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
          <h2>Arsip</h2>
          <List
            key={archiveNotes.id}
            notes={archiveNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
