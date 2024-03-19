import ArchiveBtn from "./ArchiveBtn";
import DeleteBtn from "./DeleteBtn";
import ItemContent from "./ItemContent";
import { showFormattedDate } from "../utils/index";

function Item({ id, title, createdAt, body, archived, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <ItemContent
        title={title}
        createdAt={showFormattedDate(createdAt)}
        body={body}
      />
      <div className="note-item__action">
        <DeleteBtn id={id} onDelete={onDelete} />
        <ArchiveBtn id={id} onArchive={onArchive}>
          {archived ? "Pindahkan" : "Arsipkan"}
        </ArchiveBtn>
      </div>
    </div>
  );
}

export default Item;
