const pizzas = [
  {
    name: "Cheese Pizza",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 10,
        medium: 15,
        large: 20,
      },
    ],
    category: "veg",
    image: "/images/cheesepizza.jpg",
    description: "Classic delight with 100% real mozzarella cheese",
  },
  {
    name: "Vege Pizza",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 9,
        medium: 14,
        large: 19,
      },
    ],
    category: "veg",
    image: "/images/vegepizza.jpg",
    description:
      "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
  },
  {
    name: "BBQ Pizza",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 12,
        medium: 16,
        large: 22,
      },
    ],
    category: "nonveg",
    description:
      "Delightful combination of onion, capsicum, tomato & grilled chicken",
    image: "/images/bbqpizza.jpg",
  },
  {
    name: "Chicken Pizza",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 13,
        medium: 18,
        large: 24,
      },
    ],
    category: "nonveg",
    image: "/images/chickenpizza.jpg",
    description:
      "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
  },
  {
    name: "Chicken Pepperoni",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 13,
        medium: 16,
        large: 22,
      },
    ],
    category: "nonveg",
    image: "/images/chickentikkapizza.jpg",
    description:
      "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  },
  {
    name: "Spicy Tikka Pizza",
    variants: ["small", "medium", "large"],
    prices: [
      {
        small: 14,
        medium: 18,
        large: 24,
      },
    ],
    category: "nonveg",
    image: "/images/spicypizza.jpg",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
  },
];
export default pizzas;
