function ArchiveBtn({ id, onArchive, children }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {children}
    </button>
  );
}

export default ArchiveBtn;
