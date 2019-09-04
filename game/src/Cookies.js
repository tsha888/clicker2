import React, { Component, useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity, Button, TextInput } from "react-native";
import { connect } from "react-redux";

class Cookies extends Component {
  constructor(props){
    super(props);
    this.state = {
      store: false,
      isClicked: false,
      username: '',
      highscore: false,
      score:0,
      scorer:"no one"

    }
  }
  componentDidMount() {
        setTimeout(() => {
            this.setState({
                timer: this.props.cookies + 1
            })
        }, 1000);
    }

  render() {
    if (this.state.isClicked) {
      return (
        <View style={styles.container}>
          <View style={styles.clickerContainer}>
          <TextInput
            style={styles.clickerCount}
            placeholder="Enter your username"
            value={this.state.username}
            onChangeText={setUsername.bind(this)}
            />
            
            <Text style={styles.clickerCount}> {this.props.cookies} </Text>
            
          </View>
          <View style={styles.shopContainer}>
            <TouchableOpacity style={styles.bottomIcons}>
              <Text>The Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomIcons}>
              <Text>Highest Score</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomIcons}
              onPress={toggleSwitch.bind(this)}
            >
              <Text>My Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
<<<<<<< HEAD

    if (this.state.highscore) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: this.props.pageBackground
            }}
            style={styles.topContainer}
          >
            <View style={styles.highscoreTopContainer}>
              <Text style={styles.leaderboardHeader}> Leaderboards </Text>
              <View style={styles.leadberboardCategory}>
                <Text style={styles.categoryText}> Name </Text>
                <Text style={styles.categoryText}> Score </Text>
              </View>
              <View style={styles.leadberboardCategory}>
                <Text style={styles.resultText}> Tommy </Text>
                <Text style={styles.resultText}> Lvl. 10 </Text>
              </View>
              <View style={styles.leadberboardCategory}>
                <Text style={styles.resultText}> Michael </Text>
                <Text style={styles.resultText}> Lvl. 8 </Text>
              </View>
              <View style={styles.leadberboardCategory}>
                <Text style={styles.resultText}> Paul </Text>
                <Text style={styles.resultText}> Lvl. 6 </Text>
              </View>
              <View style={styles.leadberboardCategory}>
                <Text style={styles.resultText}> {this.state.scorer} </Text>
                <Text style={styles.resultText}> Lvl. {this.state.score} </Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={toggleShop.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Upgrade</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleHighscore.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Play Game</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleProfile.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    if (this.state.clickProfile) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: this.props.pageBackground
            }}
            style={styles.topContainer}
          >
            <View style={styles.topContainer}>
              <Text style={styles.cookieAmount}>
                Gold: {this.props.cookies}
              </Text>
              <TextInput
                placeholder="Enter your username"
                placeholderTextColor="white"
                value={this.state.username}
                onChangeText={setUsername.bind(this)}
                style={styles.usernameVal}
              />
              <TouchableOpacity
                onPress={() => this.sendRequest()}
                style={styles.playGame}
              >
                <Text> save name </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleProfile.bind(this)}
                style={styles.playGame}
              >
                <Text> Play Game </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={toggleShop.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Upgrade</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleHighscore.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Leaderboard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleProfile.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Play Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: this.props.background[0]
          }}
          style={styles.topContainer}
        >
          <View style={styles.cookieScreen}>
            <Text style={styles.levelAmount}> lvl: {this.props.level}</Text>
            <Text style={styles.goldAmount}> Gold: {this.props.cookies} </Text>
            <TouchableOpacity onPress={() => this.props.increaseCookies()}>
              <Image
                source={{
                  uri: this.props.uri[0]
                }}
                style={{ width: 300, height: 300 }}
              />
            </TouchableOpacity>
            <Text style={styles.healthAmount}>
              {' '}
              HP: {this.props.healthPoints}{' '}
            </Text>
          </View>
          {/* </View> */}
        </ImageBackground>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            onPress={toggleShop.bind(this)}
            style={styles.bottomButtons}
          >
            <Text style={styles.footerButtons}>Upgrade</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleHighscore.bind(this)}
            style={styles.bottomButtons}
          >
            <Text style={styles.footerButtons}>Leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleProfile.bind(this)}
            style={styles.bottomButtons}
          >
            <Text style={styles.footerButtons}>Profile</Text>
=======
    if (this.state.highscore){
      return(
        <View style ={styles.container}>
          <View style={styles.shopStuff}>
            <Text>Top Scorer: {this.state.scorer}  Top score: {this.state.score}</Text>
          </View>

          <View style={styles.shopContainer}>
            <TouchableOpacity style={styles.bottomIcons} onPress={store.bind(this)}>
              <Text>The Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomIcons} onPress={toggleHighscore.bind(this)}>
              <Text>Highest Score</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomIcons}
              onPress={toggleSwitch.bind(this)}
            >
              <Text>My Profile</Text>
            </TouchableOpacity>
          </View>
      </View>
      )
    }
    if (this.state.store){
      return(
      <View style ={styles.container}>
          <View style={styles.shopStuff}>
            <View style = {{flexDirection: "row", alignItems: 'center', margin: 'auto'}}>
              <View style = {{marginRight: 10, alignItems: 'center'}}>
                <Text> Clicker: level {this.props.clickerLevel} </Text>
                <Text> Total Cookies: {this.props.cookies} </Text>
                <Text> Clicker Price: {this.props.clickerPrice} </Text>
              </View>

              <View style = {{marginLeft: 10}}>
                <TouchableOpacity onPress={()=>this.props.increaseClicker()}>
                  <View style={{backgroundColor: 'red', width: 30, height: 20}}/>
                </TouchableOpacity>
              </View>
            </View>

            <View style = {{flexDirection: "row", alignItems: 'center', margin: 'auto'}}>
              <View style = {{marginRight: 10, alignItems: 'center'}}>
                <Text> AutoClick: level {this.props.autoLevel} </Text>
                <Text> Total Cookies: {this.props.cookies} </Text>
                <Text> Auto Price: {this.props.autoPrice} </Text>
              </View>

              <View style = {{marginLeft: 10}}>
                <TouchableOpacity onPress={()=>this.props.increaseAuto()}>
                  <View style={{backgroundColor: 'red', width: 30, height: 20}}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.shopContainer}>
            <TouchableOpacity style={styles.bottomIcons} onPress={store.bind(this)}>
              <Text>The Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomIcons}>
              <Text>Highest Score</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bottomIcons}
              onPress={toggleSwitch.bind(this)}
            >
              <Text>My Profile</Text>
            </TouchableOpacity>
          </View>
      </View>
      )
    }
    return (
       // The entire screen
      <View style={styles.container}>
        <View style={styles.clickerContainer}>
          <Text style={styles.count}> {this.props.cookies} </Text>
          <TouchableOpacity onPress={() => this.props.increaseCookies()}>
            <Image
              source={{
                uri:
                  "https://www.stickpng.com/assets/images/580b57fbd9996e24bc43c0fc.png"
              }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        </View>
        {/* Touching the bottom to get to specific part */}
        <View style={styles.shopContainer}>
          <TouchableOpacity 
            style={styles.bottomIcons} 
            onPress={store.bind(this)}>
            <Text>The Shop</Text>
>>>>>>> f94152fa1845bf549bf54e8114694c48b471eb66
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomIcons}
          onPress={toggleHighscore.bind(this)}>
            <Text>Highest Score</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomIcons}
            onPress={toggleSwitch.bind(this)}
          >
            <Text>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

<<<<<<< HEAD
function toggleShop() {
  if (this.state.highscore) {
    return this.setState({
      highscore: !this.state.highscore,
      clickShop: !this.state.clickShop
    });
  }
  if (this.state.clickProfile) {
    return this.setState({
      clickShop: !this.state.clickShop,
      clickProfile: !this.state.clickProfile
    });
  }
  this.setState({
    clickShop: !this.state.clickShop
  });
}

function toggleHighscore() {
  if (this.state.clickProfile) {
    this.setState({
      clickProfile: !this.state.clickProfile,
      highscore: !this.state.highscore
    });
  }
  if (this.state.clickShop) {
    this.setState({
      clickShop: !this.state.clickShop,
      highscore: !this.state.highscore
    });
  }
  if (this.state.score < this.props.level) {
    this.setState({
      scorer: this.state.username,
      score: this.props.level
    });
  }
  this.setState({
    highscore: !this.state.highscore
  });
}

function toggleProfile() {
  if (this.state.highscore) {
    return this.setState({
      highscore: !this.state.highscore,
      clickProfile: !this.state.clickProfile
    });
  }
  if (this.state.clickShop) {
    return this.setState({
      clickShop: !this.state.clickShop,
      clickProfile: !this.state.clickProfile
    });
  }
  this.setState({
    clickProfile: !this.state.clickProfile
  });
}

function setUsername(user) {
  this.setState({
    username: user
  });
}
=======
function setUsername(user){
    this.setState({
        username: user
    })
}

function toggleHighscore() {
  
  if(this.state.score < this.props.cookies){
    this.setState({
      scorer: this.state.username,
      score: this.props.cookies
    })
  }
this.setState({
      highscore: !this.state.highscore
  })
}

function toggleSwitch() {
  this.setState({ 
    isClicked: !this.state.isClicked 
  });
}

function store(){
    this.setState({
      store: !this.state.store
    })
  }
>>>>>>> f94152fa1845bf549bf54e8114694c48b471eb66

function mapStateToProps(state) {
  return {
    cookies: state.cookies,
    clickerLevel: state.clickerLevel,
    clickerPrice: state.clickerPrice,
<<<<<<< HEAD
    grandmaLevel: state.grandmaLevel,
    grandmaPrice: state.grandmaPrice,
    autoLevel: state.autoLevel,
    autoPrice: state.autoPrice,
    rapidLevel: state.rapidLevel,
    rapidPrice: state.rapidPrice,
    highscore: state.highscore,
    level: state.level,
    healthPoints: state.healthPoints,
    uri: state.uri,
    background: state.background,
    pageBackground: state.pageBackground
=======
    autoLevel: state.autoLevel,
    autoPrice: state.autoPrice,
    highscore: state.highscore
>>>>>>> f94152fa1845bf549bf54e8114694c48b471eb66
  };
}

function mapDispatchToProps(dispatch) {
  return {
<<<<<<< HEAD
    increaseCookies: () => dispatch({ type: 'INCREASE_COOKIES' }),
    increaseClicker: () => dispatch({ type: 'INCREASE_CLICKER' }),
    increaseGrandma: () => dispatch({ type: 'INCREASE_GRANDMA' }),
    increaseAuto: () => dispatch({ type: 'INCREASE_AUTO' }),
    increaseRapid: () => dispatch({ type: 'INCREASE_RAPID' }),
    highscore: () => dispatch({ type: '' })
=======
    increaseCookies: () => dispatch({ type: "INCREASE_COOKIES" }),
    increaseClicker: () => dispatch({ type: "INCREASE_CLICKER" }),
    increaseAuto:() => dispatch({ type: "INCREASE_AUTO" })

>>>>>>> f94152fa1845bf549bf54e8114694c48b471eb66
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cookies);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
<<<<<<< HEAD
  topContainer: {
    flex: 14 / 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highscoreTopContainer: {
    flex: 14 / 15,
    alignItems: 'center'
=======
    theShop: {
    flex: 9 / 10,
    alignItems: 'center',
    justifyContent:'space-around'
  },
  count:{
    fontSize: 40
  },
  shopStuff: {
    flex: 9 / 10,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "space-around",
  },
  clickerContainer: {
    flex: 9 / 10,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  },
  clickerCount: {
    fontSize: 40,
    paddingBottom: 200
>>>>>>> f94152fa1845bf549bf54e8114694c48b471eb66
  },
  bottomContainer: {
    flex: 1 / 15,
    flexDirection: 'row'
  },
  cookieScreen: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  levelAmount: {
    fontFamily: 'Cochin',
    color: 'white',
    marginBottom: 10,
    fontSize: 20
  },
  cookieAmount: {
    fontFamily: 'Cochin',
    fontSize: 50,
    marginBottom: 40,
    color: 'gold'
  },
  goldAmount: {
    fontFamily: 'Cochin',
    fontSize: 30,
    marginBottom: 35,
    color: 'gold',
    fontWeight: 'bold'
  },
  healthAmount: {
    fontFamily: 'Cochin',
    fontSize: 35,
    marginTop: 30,
    color: 'red',
    fontWeight: 'bold'
  },
  bottomButtons: {
    flex: 1 / 3,
<<<<<<< HEAD
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'purple'
  },
  usernameVal: {
    color: 'white',
    marginBottom: 50,
    fontFamily: 'Cochin',
    fontSize: 30,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  playGame: {
    backgroundColor: 'gold',
    fontSize: 40,
    fontFamily: 'Cochin',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 15
  },
  leaderboardHeader: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontFamily: 'Cochin',
    marginTop: '30%',
    color: 'white'
  },
  leadberboardCategory: {
    flexDirection: 'row',
    marginTop: 35,
    color: 'white'
  },
  categoryText: {
    flex: 1 / 2,
    fontFamily: 'Cochin',
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  resultText: {
    flex: 1 / 2,
    fontFamily: 'Cochin',
    fontSize: 25,
    color: 'white',
    textAlign: 'center'
  },
  shopItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    width: '98%',
    borderWidth: 1,
    borderColor: 'brown',
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    opacity: 0.9
  },
  itemInfo: {
    alignItems: 'center',
    width: '60%'
  },
  buyItem: {
    alignItems: 'center',
    width: '40%'
  },
  buyButton: {
    backgroundColor: 'green',
    fontSize: 20,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    borderColor: 'darkgreen',
    borderWidth: 1,
    borderRadius: 15
  },
  buy: {
    fontFamily: 'Cochin',
    fontSize: 20,
    color: 'yellow'
  },
  information: {
    fontFamily: 'Cochin',
    fontSize: 18
  },
  information2: {
    fontFamily: 'Cochin',
    fontSize: 15
  },
  goldNumber: {
    fontFamily: 'Cochin',
    fontSize: 18,
    color: 'green'
  },
  priceNumber: {
    fontFamily: 'Cochin',
    fontSize: 18,
    color: 'red'
  },
  footerButtons: {
    fontFamily: 'Cochin',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'pink'
  }
});
=======
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    alignSelf: "stretch",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 20
  },
  button2: {
    backgroundColor: "gold"
  },
});
>>>>>>> f94152fa1845bf549bf54e8114694c48b471eb66
