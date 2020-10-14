import { Schema, model } from "mongoose";

//Create Schema
const FavouriteSchema = new Schema(
  {
    userFrom: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    movieId: {
      type: String,
    },
    movieTitle: {
      type: String,
    },
    movieImage: {
      type: String,
    },
    movieRunTime: {
      type: String,
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);

const Favourite = model("Favourite", FavouriteSchema);

export default Favourite;
