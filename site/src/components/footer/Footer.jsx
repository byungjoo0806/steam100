import React from 'react'
import { FooterContainer, FooterWrap, FooterTop, FooterTopLeft, FooterTopRight, FooterLangBtn,
    FooterBottom, FooterLogo, FooterP } from './Footer.styled'

const Footer = () => {
  return (
    <div className='Footer'>
        <FooterContainer>
            <FooterWrap>
                <FooterTop>
                    <FooterTopLeft>
                            <li>브랜드 소개</li>
                            <li>크롬 확장 프로그램</li>
                            <li>이용 가이드</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                            <li>청소년보호정책</li>
                            <li>멤버쉽</li>
                            <li>제휴문의</li>
                            <li>고객지원</li>
                    </FooterTopLeft>
                    <FooterTopRight>
                            <li><svg 
                              aria-hidden="true" 
                              focusable="false" 
                              role="img" 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 640 512" 
                              width={20}
                              height={20}
                              style={{ fill: "#3B3B98" }}  // fill-jacarta-300을 임의의 색상값으로 대체해 보았습니다.
                            ><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg></li>

                            <li><svg
                            aria-hidden="true"
                            focusable="false" 
                            role="img" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 512 512"
                            width={20}
                            height={20}
                            style={{ fill: "#3B3B98" }}
                            ><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></li>
                            
                            <li><svg 
                            aria-hidden="true" 
                            focusable="false" 
                            role="img" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 214.38 180.34"
                            width={20}
                            height={20}
                            style={{ fill: "#3B3B98" }}
                            ><path d="M102.18,177.44c-.21-.25-.39-.52-.56-.8l-17.24-28.07H33.86C15.13,148.54-.03,133.33,0,114.59H0V33.98C-.03,15.25,15.13,.03,33.86,0H180.52c18.73,.03,33.89,15.24,33.86,33.97h0V114.58c.04,18.73-15.12,33.95-33.85,33.98h-50.52l-17.24,28.07c-.16,.3-.35,.58-.58,.84-1.03,1.78-2.93,2.87-4.99,2.87-2.07,0-3.97-1.11-5.01-2.9Zm64.59-59.34h5.1s19.18,.21,19.18-20.5h0V60.57h-12.75v3.67c-2.75-3.21-6.78-5.04-11.01-5,0,0-18.57-.79-18.57,20.11,0,0-.2,19.47,18.06,19.47,0,0,7.44,.31,11.52-5v3.06s.93,9.59-8.36,9.59h-3.16v11.63Zm-68.57-38.61s-.7,19.98,21.69,19.98c0,0,22.19-.04,22.19-19.98,0,0,.72-20.25-22.19-20.25,0,0-21.69,0-21.69,20.25h0Zm-50.59,19.98h0s18.5-.7,18.5-20.41c0,0-.68-20-18.5-20-4.22,.31-8.19,2.14-11.16,5.17v-20.81h-13.13v54.68h13.26v-4.28s3.13,5.65,11.02,5.65Zm28.7-33.74v32.37h12.65V62.74s.54-20.54-18.64-20.54v12.65h.04c.52,0,5.95,.25,5.95,10.88h0Zm85.71,13.76c0-4.65,3.77-8.43,8.43-8.43h0c4.66,0,8.43,3.77,8.43,8.43,0,4.66-3.77,8.44-8.43,8.44-4.66,0-8.43-3.78-8.43-8.44h0Zm-50.56,0c0-4.66,3.78-8.43,8.44-8.43,4.66,0,8.43,3.77,8.43,8.43,0,4.66-3.77,8.44-8.43,8.44-4.66,0-8.43-3.78-8.44-8.44h0Zm-75.18,0c0-4.66,3.78-8.43,8.44-8.43,4.66,0,8.43,3.77,8.43,8.43,0,4.66-3.77,8.44-8.43,8.44-4.66,0-8.43-3.78-8.44-8.44h0Z"></path></svg></li>
                            <FooterLangBtn>
                                <svg width={20} 
                                height={20}
                                viewBox="0 0 20 20"
                                ><path d="M12.99,3A10,10,0,1,0,23,13,10,10,0,0,0,12.99,3Zm6.93,6H16.97a15.649,15.649,0,0,0-1.38-3.56A8.03,8.03,0,0,1,19.92,9ZM13,5.04A14.087,14.087,0,0,1,14.91,9H11.09A14.087,14.087,0,0,1,13,5.04ZM5.26,15a7.822,7.822,0,0,1,0-4H8.64a16.515,16.515,0,0,0-.14,2,16.515,16.515,0,0,0,.14,2Zm.82,2H9.03a15.649,15.649,0,0,0,1.38,3.56A7.987,7.987,0,0,1,6.08,17ZM9.03,9H6.08a7.987,7.987,0,0,1,4.33-3.56A15.649,15.649,0,0,0,9.03,9ZM13,20.96A14.087,14.087,0,0,1,11.09,17h3.82A14.087,14.087,0,0,1,13,20.96ZM15.34,15H10.66a14.713,14.713,0,0,1-.16-2,14.585,14.585,0,0,1,.16-2h4.68a14.585,14.585,0,0,1,.16,2A14.713,14.713,0,0,1,15.34,15Zm.25,5.56A15.649,15.649,0,0,0,16.97,17h2.95a8.03,8.03,0,0,1-4.33,3.56ZM17.36,15a16.515,16.515,0,0,0,.14-2,16.515,16.515,0,0,0-.14-2h3.38a7.822,7.822,0,0,1,0,4Z" transform="translate(-3 -3)"></path></svg>
                                <span>KO</span>
                            </FooterLangBtn>
                            <FooterLangBtn>
                                <svg width="20" 
                                height="20" 
                                viewBox="0 0 20 20" 
                                ><path d="M13.081,23c-.1,0-.208,0-.312,0A10.019,10.019,0,0,1,12.154,3a1,1,0,0,1,.9,1.593A6.011,6.011,0,0,0,21.46,13a1,1,0,0,1,1.593.9A10.019,10.019,0,0,1,13.081,23ZM10.35,5.443a8.015,8.015,0,0,0,2.48,15.549c.083,0,.167,0,.251,0a7.97,7.97,0,0,0,7.538-5.287A8.017,8.017,0,0,1,10.35,5.443Z" transform="translate(-3.057 -3)"></path></svg>
                            </FooterLangBtn>
                    </FooterTopRight>
                </FooterTop>
                <FooterBottom>
                    <FooterLogo>
                      @
                    </FooterLogo>
                    <h1>게임추천사이트</h1>
                    <FooterP>
                    (주)게임추천사이트 | 대표: 박병주 | 사업자등록번호 ???-??-????? <br />

                    (00000) 서울시 강동구 마곡중앙8로 7길 11 게임추천사이트 <br />

                    이메일: jisub11@nate.com <br />
                    <br />
                    Copyright© 2023. DigiCAP Corp. All rights reserved.
                    </FooterP>
                </FooterBottom>
            </FooterWrap>
        </FooterContainer>
    </div>
  )
}

export default Footer