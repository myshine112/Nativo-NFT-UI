import React from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "../assets/landingSlider/sliderData";
import Slider from "react-slick";
import { getNearContract, fromYoctoToNear, getNearAccount } from "../utils/near_interaction";
import verifyImage from '../assets/img/Check.png';

function Trendings() {
  const [t, i18n] = useTranslation("global")
  const [tokens, setTokens] = React.useState({ items: [], totalTokens: 6 })
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    useTransform: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  React.useEffect(() => {
    (async () => {
      window.contr = await getNearContract();

      //instanciar contracto
      let contract = await getNearContract();
      let nft_total_supply = await contract.nft_total_supply()

      let payload = {};

      if(nft_total_supply < tokens.totalTokens ) {
         payload = {
          from_index: "0",
          limit: parseInt(tokens.totalTokens),
        }
      } else {
         payload = {
          from_index: (nft_total_supply - (tokens.totalTokens)).toString(),
          limit: parseInt(tokens.totalTokens),
        }
      }

      
      let toks = await contract.nft_tokens(
        payload,
      )
      setTokens({
        ...tokens,
        items: tokens.items.concat(toks.reverse())
      });
      console.log('tokens', tokens)
    })();

  }, []);

  return (
    <section className="text-gray-600 body-font bg-gray-100 dark:bg-darkgray" >
      <div className="bg-trendings-background bg-contain bg-no-repeat bg-top container w-full mx-auto pt-0 md:pt-4 md:pb-24 dark:bg-darkgray  flex flex-row flex-wrap justify-center" >
        <div className="w-full pb-10 pt-0">
          <h2 className="dark:text-white  text-center  uppercase  font-raleway font-bold text-3xl  lg:text-6xl">{t("Landing.trending-title")}</h2>
          <div className="h-[30px] w-2/3 bg-yellow3 mt-[-10px] mx-auto " />
        </div>
        <div className="w-full trending lg:px-20">
          <Slider {...settings} >
            {tokens.items.map((item, key) => {
              return (
                <>
                      <a
                        href={"/detail/" + item.token_id}
                      >
                        <div className="flex flex-row  mb-10 md:mb-0  justify-center " key={key}>
                          <div className="trending-token w-64 md:w-80 rounded-20 hover:shadow-yellow1   hover:scale-105 ">
                            <div className=" bg-white rounded-xl">
                              <div className="pb-3">
                                  <img
                                    className="object-cover object-center rounded-t-xl h-48 md:h-72 w-full "
                                    src={`https://nativonft.mypinata.cloud/ipfs/${item.metadata.media}`}

                                    alt={item.description}
                                  />
                              </div>
                              <div className="px-3 py-1">

                                <div className="capitalize text-black text-sm  text-ellipsis overflow-hidden whitespace-nowrap  font-raleway font-bold">{item.metadata.title}</div>
                                <div className="flex justify-end">
                                  <div className="text-black text-sm font-raleway font-normal py-2">token id: {item.token_id}</div>
                                </div>
                              </div>
                              <div className=" px-3 font-raleway text-xs text-right mx-auto justify-center text-ellipsis overflow-hidden">{t("tokCollection.createdBy")} <a href={`profile/${item.creator_id.split('.')[0]}`} className="font-raleway text-xs font-bold text-blue2 text-ellipsis overflow-hidden">{item.creator_id}</a></div>-
                            </div>
                          </div>
                        </div>
                      </a>
                </>
                
              );
            })}
          </Slider>
          
        </div>
      </div>
    </section>
  );
}


export default Trendings;
