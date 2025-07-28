import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [data, setData] = useState({
    "Bottle & Glass Art": [
      "Painted Bottles", "Fairy Light Bottles", "Bottle Vases",
      "Mosaic Bottles", "Decoupage Bottles", "Themed Bottle Decor", "Name Bottles",
    ],
    "Wall Hangings": ["Dreamcatcher", "Mandala", "Mirror Art", "Fridge Magnet", "Clock"],
    "Upcycled Crafts": [
      "Bottle Cap Fridge Magnets", "Plastic Spoon Flowers",
      "CD Art Wall Pieces", "Upcycled Plastic Jewelry",
    ],
    "Paper Crafts": ["Handmade Greeting Cards"],
    "Gift Crafts": [
      "Personalized Gift Bottles", "DIY Candle in a Jar",
      "Handmade Gift Box & Tag Set", "Mini Scrapbook",
    ],
    "Flower Pot Art": [
      "Terracotta Pot Painting", "Mandala Pot Design",
      "Plastic Bottle Planters", "Themed Pot Art",
    ],
    "Painting": [
      "Acrylic Painting", "Watercolor Painting", "Oil Painting", "Ink & Pen Painting",
    ],
    "Paper Basket": ["Paper Bags", "Bows/Trays", "Pen Stand", "Gift Box", "Jewellery Box"],
    "Jewellery": ["Earrings", "Necklaces", "Brooches & Hair Accessories"],
    "Flowers": ["Paper Flowers", "Fabric Flowers", "Ribbon Flowers", "Clay Flowers", "Eco Flowers"],
    "Keychains": ["Fabric Keychains", "Clay Keychains", "Crochet Keychains", "Paper Keychains", "Beaded Keychains"],
  });

  return (
    <CategoryContext.Provider value={{ data, setData }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);
