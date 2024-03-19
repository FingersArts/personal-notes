import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onChangeTitle(event) {
    const newTitle = event.target.value;
    if (newTitle.length <= this.state.limit)
      [
        this.setState({
          title: newTitle,
        }),
      ];
  }

  onChangeBody(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter : {this.state.limit - this.state.title.length}
        </p>
        <form>
          <input
            id="note-input__title"
            type="text"
            placeholder="Masukkan judul..."
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <textarea
            name="input-body"
            id="note-input__body"
            cols="30"
            rows="10"
            placeholder="Tulis catatanmu disini..."
            value={this.state.body}
            onChange={this.onChangeBody}
          ></textarea>
          <button type="submit" onClick={this.onSubmitEventHandler}>
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
