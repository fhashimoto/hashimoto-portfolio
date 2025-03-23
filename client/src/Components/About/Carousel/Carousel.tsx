import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { IJobCard } from "../../../Utils/Interface";
import { JobCard } from "../JobCard";
import "./Carousel.scss";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselArrow";
import { DotButton, useDotButton } from "./CarouselDot";

type PropType = {
  slides: IJobCard[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla" dir={props.options?.direction} id="about">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div
              className={"embla__slide".concat(
                index !== selectedIndex ? " embla__slide--not-selected" : ""
              )}
              key={index}
            >
              <div className="embla__slide__content">
                <JobCard jobCard={item} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            >
              <p>{slides[index].date}</p>
            </DotButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
