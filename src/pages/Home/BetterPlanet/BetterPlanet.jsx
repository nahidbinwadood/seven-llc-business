/* eslint-disable react/prop-types */
import ButtonTwo from '../../../components/ButtonTwo/ButtonTwo';

const BetterPlanet = ({ data, backgroundImage }) => {
  const { title, description, buttonText, gradient } = data;
  return (
    <section className="mb-16">
      <div
        className=""
        style={{
          backgroundImage: `${gradient}, url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="py-[150px] px-[221px] flex gap-[133px]">
          <div className="w-[45%]">
            <h1 className="max-w-[595px] text-[#FFF] text-5xl font-bold leading-[67px]">
              {title}
            </h1>
            <div className="mt-9">
              <ButtonTwo text={buttonText} />
            </div>
          </div>
          <div>
            <p className="max-w-[720px] text-[#FAFBFC] text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterPlanet;
