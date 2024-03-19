import Item from "./Item";

function List({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <div className="empty-message-container">
          <p>Tidak ada Catatan</p>
        </div>
      ) : (
        notes.map((note) => (
          <Item
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            archived={note.archived}
            {...note}
          />
        ))
      )}
    </div>
  );
}

export default List;
