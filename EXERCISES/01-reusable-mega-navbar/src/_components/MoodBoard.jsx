export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={image} alt="" className="mood-board-image" />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <MoodBoardItem
        color={"grey"}
        image={"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"}
        description={"Nowhere in Particular"}
      ></MoodBoardItem>
      <MoodBoardItem
        color={"grey"}
        image={"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"}
        description={"Nowhere in Particular"}
      ></MoodBoardItem>
      <MoodBoardItem
        color={"grey"}
        image={"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"}
        description={"Nowhere in Particular"}
      ></MoodBoardItem>
      <MoodBoardItem
        color={"grey"}
        image={"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"}
        description={"Nowhere in Particular"}
      ></MoodBoardItem>
      <MoodBoardItem
        color={"grey"}
        image={"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"}
        description={"Nowhere in Particular"}
      ></MoodBoardItem>
    </div>
  );
}
