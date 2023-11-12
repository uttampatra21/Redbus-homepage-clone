// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

const offerCarousel = [
  {
    img: "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
    bus: "Bus",
    saving: "Save up to Rs 250 on bus tickets",
    valid: "Valid till 30 Nov",
    first: "FIRST",
    class: "iEQPzt",
  },
  {
    img: "https://st.redbus.in/Images/INDOFFER/HDFC300/80x80.png",
    bus: "Bus",
    saving: "Get 10% upto off Rs 300 on HDFC Bank",
    valid: "Valid till 14 Nov",
    first: "HDFC300",
    class: "hyEWJv",
  },
  {
    img: "https://st.redbus.in/Images/INDOFFER/80x80/SUPERHIT.png",
    bus: "Bus",
    saving: "Save up to Rs 300 on AP, TS routes",
    valid: "Valid till 30 Nov",
    first: "SUPERHIT",
    class: "bVQpiQ",
  },
  {
    img: "https://st.redbus.in/Images/INDOFFER/80x80/BUS300.png",
    bus: "Bus",
    saving: "Save up to Rs 300 on RJ,MH, Goa, MP, Delhi, Gujarat, RON",
    valid: "Valid till 30 Nov",
    first: "BUS300",
    class: "fFJxMU",
  },
  {
    img: "https://st.redbus.in/Images/INDOFFER/80x80/RBTRIP.png",
    bus: "Bus",
    saving: "Save up to Rs 200 in Kerala routes.",
    valid: "Valid till 30 Nov",
    first: "RBTRIP",
    class: "cWNkhC",
  },
  {
    img: "https://st.redbus.in/Images/INDOFFER/80x80/Chartered.png",
    bus: "Bus",
    saving: "Save up to Rs 300 on Chartered Bus.",
    valid: "Valid till 30 Nov",
    first: "CHARTERED15",
    class: "irTdyn",
  },
];

const data = offerCarousel
  .map((x) => {
    return `
  <div
  class="OfferCard__OfferCardContainer-sc-1f27jzb-0 ${x.class}"
>
  <div
    class="OfferCard__OfferCardLeftSection-sc-1f27jzb-1 imBptA"
  >
    <img
      src="${x.img}"
      alt="OfferImage"
      class="OfferCard__OfferImg-sc-1f27jzb-2 cwqblp"
    />
    <div
      class="OfferCard__ConditionApplyText-sc-1f27jzb-3 WAbSq"
    ></div>
  </div>
  <div
    class="OfferCard__OfferCardRightSection-sc-1f27jzb-4 jbPWCT"
  >
    <div
      class="OfferCard__BusinessUnitText-sc-1f27jzb-5 gJgZBc"
    >
      ${x.bus}
    </div>
    <div class="OfferCard__OfferTitle-sc-1f27jzb-6 vOLKx">
      ${x.saving}
    </div>
    <div class="OfferCard__Validitytext-sc-1f27jzb-8 ggQByw">
      ${x.valid}
    </div>
    <div
      class="OfferCard__OfferCodeSection-sc-1f27jzb-10 jJltku"
    >
      <div class="OfferCard__OfferCode-sc-1f27jzb-11 iWrqRd">
        ${x.first}
      </div>
      <img
        src="https://s2.rdbuz.com/web/images/homeV2/copy.svg"
        alt="copy"
        class="OfferCard__OfferCopyIcon-sc-1f27jzb-12 kcXuio"
      />
    </div>
  </div>
</div>
  
  `;
  })
  .join("");

document.getElementById("offerCarousel").innerHTML = data;

const promotionDetails = [
  {
    img: "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg",
    title: "1 of 5 buses qualify",
    des: "Primo’s strict safety qualification ensures a safer travel for you",
    class: "hBpcMq1",
  },
  {
    img: "https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg",
    title: "Preferred by 90%",
    des: "90% of travellers re-book Primo buses for its punctuality and comfort",
    class: "hBpcMq2",
  },
  {
    img: "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg",
    title: "9 Lac+ monthly travellers",
    des: "In 2022, 9 Lac+ people traveled with Primo every month",
    class: "hBpcMq3",
  },
];

const promotionData = promotionDetails.map((x) => {
  return `
  <div class="PrimoSection__PrimoSubContainer-uxv372-3 ${x.class}">
  <div class="PrimoSection__SubImgContainer-uxv372-7 fqnYyG">
    <img
      src=${x.img}
      alt="PrimoImg"
    />
  </div>
  <div class="PrimoSection__PrimoSubTextContainer-uxv372-4 cYQSQV">
    <text
      class="PrimoSection__PrimoSubContainerHeadText-uxv372-5 hlKOyy"
      >${x.title}</text
    ><text class="PrimoSection__PrimoText-uxv372-6 dPbtuK"
      >${x.des}</text
    >
  </div>
</div>
  `;
});
const promotion = document.querySelector(
  ".PrimoSection__PrimoSubSection-uxv372-2"
);
promotion.innerHTML = promotionData;

 