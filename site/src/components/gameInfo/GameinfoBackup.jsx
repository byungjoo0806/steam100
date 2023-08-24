        <div style={{display : "flex", justifyContent : "center"}}>
            {gameInfo ? (
                <div style={{width : "100%", height : "100%", display : "flex", flexWrap : "wrap", marginTop : "10px"}} className='Main'>
                    <div style={{width : "1000px", height : "500px", border : "1px solid", display : "flex", flexWrap : "wrap", position : "relative"}} className='gameIntroBox'>
                        <div className='gameTitle' style={{width : "500px", height : "10%", borderRight : "1px solid", display : "flex", justifyContent : "flex-start", alignItems : "end"}}>
                            <p style={{marginLeft : "5px", fontSize : "25px"}}>{gameInfo.name}</p>
                        </div>
                        <Mediaswiper imgs={gameInfo.screenshots} vids={gameInfo.movies} />
                        <div className='gameIntro' style={{width : "310px", height : "90%", borderTop : "1px solid", position : "absolute", right : "0", bottom : "0", boxSizing : "border-box"}}>
                            <div className='gameIntroImg' style={{width : "100%", height : "35%", borderBottom : "1px solid"}}>
                                <img style={{width : "100%", height : "100%"}} src={`${gameInfo.capsule_image}`} alt='CS GO'></img>
                            </div>
                            <div className='gameIntroText' style={{width : "100%", height : "35%", borderBottom : "1px solid", overflow : "hidden", fontSize : "15px", textAlign : "start"}}>
                                <p style={{marginLeft : "5px"}}>{gameInfo.short_description}</p>
                            </div>
                            <div className='gameCompany' style={{width : "100%", height : "30%", display : "flex", flexWrap : "wrap", alignContent : "center"}}>
                                <div className='gameReleaseDate' style={{width : "100%", height : "20%"}}>
                                    <div style={{display : "flex", justifyContent : "flex-start", alignItems : "center", marginLeft : "5px"}}>
                                        Release Date: {gameInfo.release_date.date}
                                    </div>
                                </div>
                                <div className='gameDeveloper' style={{width : "100%", height : "20%"}}>
                                    <div style={{display : "flex", justifyContent : "flex-start", alignItems : "center", marginLeft : "5px"}}>
                                        Developers: {gameInfo.developers.toString()}
                                    </div>
                                </div>
                                <div className='gamePublisher' style={{width : "100%", height : "20%"}}>
                                    <div style={{display : "flex", justifyContent : "flex-start", alignItems : "center", marginLeft : "5px"}}>
                                        Publishers: {gameInfo.publishers.toString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div style={{width : "1000px", height : "auto", border : "1px solid"}} className='gameDetailBox'>
                        <div style={{width : "100%", height : "auto", borderBottom : "1px solid", display : "flex", flexWrap : "wrap", textAlign : "left"}}>
                            <div style={{marginLeft : "5px"}}>
                                about this game : <br/>
                            </div>
                            <HtmlContent htmlcontent={aboutTheGame} />
                        </div>
                        <div className='gameMatureContent' style={{width : "100%", height : "auto", borderBottom : "1px solid", textAlign : "left"}}>
                            <div style={{marginLeft : "5px"}}>
                                mature content description : <br/>
                                {gameInfo.content_descriptors.notes}
                            </div>
                        </div>
                        <div className='gameSystemRequirements' style={{width : "100%", height : "auto", textAlign : "left"}}>
                            <Tabmenu />
                        </div>
                    </div>
                </div>
            ) : (<img src={loadingGIF} alt='loading' />) }
        </div>