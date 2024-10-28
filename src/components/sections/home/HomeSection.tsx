import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import homeImage from "@/assets/images/sectionsImages/home-img.png";
import NavigateButton from "@/components/shared/NavigateButton";
const HomePage = () => {
  return (
    <Wrapper>
      <div className="py-16 ">
        <div className="flex flex-col md:flex-row items-center justify-center my-6 rounded-lg  bg-secondary-gray  py-4">
          <div className="space-y-4  text-center sm:text-left">
            <div className="text-5xl sm:text-6xl font-bold flex flex-col w-fit gap-2 mx-auto sm:mx-0">
              <span className="bg-white p-2 ">LET&apos;S</span>
              EXPLORE{" "}
              <span className="bg-primary-yellow p-2 -rotate-2">
                UNIQUE
              </span>{" "}
              CLOTHES.
            </div>

            <p className="text-medium">
              Live for Influential and Innovative fashion!
            </p>
            <NavigateButton url="/products" label="Shop Now" />
          </div>
          <div className="sm:px-4 md:w-1/2 mt-10 md:mt-0">
            <Image
              src={homeImage}
              alt="Featured Product"
              height={1000}
              width={1000}
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
