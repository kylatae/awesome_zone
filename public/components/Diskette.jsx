function Diskette({ src, pageToLoad, onDragStart}) {
  return (
    <img
      src={src}
      width='100vw'
      height='100vh'
      alt="Diskette"
      draggable="true"
      onDragStart={onDragStart}
      data-page-to-load={pageToLoad}
    />
  );
}
export default Diskette;