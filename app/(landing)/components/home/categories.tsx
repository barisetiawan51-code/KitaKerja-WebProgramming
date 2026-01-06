import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const categoriesList = [
  {
    name: "Running",
    imgUrl: "category-running.svg",
  },
  {
    name: "Tennis",
    imgUrl: "category-tennis.svg",
  },
  {
    name: "Basketball",
    imgUrl: "category-basketball.svg",
  },
  {
    name: "Football",
    imgUrl: "category-football.svg",
  },
  {
    name: "Badminton",
    imgUrl: "category-badminton.svg",
  },
  {
    name: "Swimming",
    imgUrl: "category-swimming.svg",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="flex gap-2 text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-12 mt-8">
        {categoriesList.map((category, index) => (
          <div
            className="rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={index}
          >
            <div className="self-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                width={86}
                height="86"
                alt={category.name}
                className="mb-2.5"
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
