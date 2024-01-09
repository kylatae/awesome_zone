function Diskette({ src, pageToLoad, onDragStart}) {
  return (
    <img
      src={src}
      width='10%'
      height='10%'
      alt="Diskette"
      draggable="true"
      onDragStart={onDragStart}
      data-page-to-load={pageToLoad}
    />
  );
}
export default Diskette;