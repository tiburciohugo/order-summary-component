import Image from "next/image";

export default function Order() {
  return (
    <div className="w-[23rem] h-[36rem] max-w-[90rem] mx-auto bg-white rounded-3xl">
      <Image
        className="w-full rounded-t-3xl"
        src="/illustration-hero.svg"
        width={200}
        height={200}
        alt="hero"
      />
      <div className="p-4">
        <h4 className="text-center text-2xl text-dark-blue font-bold mt-2">
          Order Summary
        </h4>
        <p className="text-center text-desaturated-blue my-4">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex justify-between items-center mt-4 p-6 bg-pale-blue bg-opacity-30 rounded-lg h-[5.5rem]">
          <div className="flex gap-4 justify-left">
            <Image src="/icon-music.svg" width={50} height={50} alt="music" />
            <div className="flex flex-col">
              <p className="text-dark-blue font-bold">Annual Plan</p>
              <p className="text-dark-blue">$59.99/year</p>
            </div>
          </div>
          <a
            className="font-bold text-purple underline hover:no-underline hover:text-light-purple"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Change
          </a>
        </div>

        <button className="py-2 px-4 mt-6 bg-bright-blue rounded-lg w-full text-white font-semibold hover:bg-light-purple drop-shadow-2xl h-12">
          Proceed to Payment
        </button>

        <button className="py-2 px-4 mt-2 w-full text-desaturated-blue font-bold h-12 hover:text-dark-blue">
          Cancel Order
        </button>
      </div>
    </div>
  );
}
