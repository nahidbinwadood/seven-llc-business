import requestSectionPic from "../../../assets/images/requestSectionPic.png";
import ButtonTwo from "../../../components/ButtonTwo/ButtonTwo";

const Request = () => {
  return (
    <section className="mt-[150px]">
      <div
        className="h-[619px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(7, 160, 236, 0.90) 0%, rgba(7, 160, 236, 0.90) 100%), url(${requestSectionPic}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* This is the content inside the background image */}
        <div className="flex flex-col items-center pt-[136px] pb-[150px]">
          <h2 className="text-[#FFF] text-5xl font-bold">
            Request a Quote Today
          </h2>
          <p className="mt-6 max-w-[639px] text-[22px] text-center text-[#FAFBFC]">
            Upload your design to get a quote today or let us help you create a
            product tailored to your business needs!
          </p>
          {/* This is button section */}
          <div className="mt-12 flex flex-col gap-6">
            <ButtonTwo text={"Upload Your Design"} />
            <ButtonTwo text={"I need a design"} variant="transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
