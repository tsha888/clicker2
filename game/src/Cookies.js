import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import mongoose from 'mongoose';

var Highscore = mongoose.model('Highscore', {
  name: String,
  score: Number
});

class Cookies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickProfile: true,
      clickShop: false,
      highscore: false,
      username: '',
      score: 0,
      scorer: 'no one'
    };
  }
  sendRequest() {
    console.log('sending request');
    fetch('http://192.168.1.42:3000')
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        var newHighScore = new Highscore({
          name: this.state.username,
          score: this.state.score
        });
        if (resJson.success) {
          newHighScore.save(function(err, con) {
            if (err) {
              console.log(err);
              return;
            }
            console.log(con);
          });
        }
      });
  }
  render() {
    if (this.state.clickShop) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: this.props.pageBackground
            }}
            style={styles.topContainer}
          >
            <View style={styles.topContainer}>
              <View style={styles.shopItem}>
                <View style={styles.itemInfo}>
                  <Text style={styles.information}>
                    {' '}
                    Clicker: lvl {this.props.clickerLevel}{' '}
                  </Text>
                  <Text style={styles.goldNumber}>
                    {' '}
                    Total Gold: {this.props.cookies}{' '}
                  </Text>
                  <Text style={styles.priceNumber}>
                    {' '}
                    Clicker Price: {this.props.clickerPrice}{' '}
                  </Text>
                  <Text style={styles.information}>
                    {' '}
                    +1 dmg for every click{' '}
                  </Text>
                </View>

                <View style={styles.buyItem}>
                  <TouchableOpacity
                    onPress={() => this.props.increaseClicker()}
                    style={styles.buyButton}
                  >
                    <Text style={styles.buy}> Upgrade </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.shopItem}>
                <View style={styles.itemInfo}>
                  <Text style={styles.information}>
                    {' '}
                    Elite: lvl {this.props.grandmaLevel}{' '}
                  </Text>
                  <Text style={styles.goldNumber}>
                    {' '}
                    Total Gold: {this.props.cookies}{' '}
                  </Text>
                  <Text style={styles.priceNumber}>
                    {' '}
                    Elite Price: {this.props.grandmaPrice}{' '}
                  </Text>
                  <Text style={styles.information}>
                    {' '}
                    x3 dmg for every click{' '}
                  </Text>
                </View>

                <View style={styles.buyItem}>
                  <TouchableOpacity
                    onPress={() => this.props.increaseGrandma()}
                    style={styles.buyButton}
                  >
                    <Text style={styles.buy}> Upgrade </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.shopItem}>
                <View style={styles.itemInfo}>
                  <Text style={styles.information}>
                    {' '}
                    AutoGold: lvl {this.props.autoLevel}{' '}
                  </Text>
                  <Text style={styles.goldNumber}>
                    {' '}
                    Total Gold: {this.props.cookies}{' '}
                  </Text>
                  <Text style={styles.priceNumber}>
                    {' '}
                    AutoGold Price: {this.props.autoPrice}{' '}
                  </Text>
                  <Text style={styles.information}>
                    {' '}
                    x5 gold for every .1 sec{' '}
                  </Text>
                </View>

                <View style={styles.buyItem}>
                  <TouchableOpacity
                    onPress={() => this.props.increaseAuto()}
                    style={styles.buyButton}
                  >
                    <Text style={styles.buy}> Upgrade </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.shopItem}>
                <View style={styles.itemInfo}>
                  <Text style={styles.information}>
                    RapidClick: lvl {this.props.rapidLevel}{' '}
                  </Text>
                  <Text style={styles.goldNumber}>
                    {' '}
                    Total Gold: {this.props.cookies}{' '}
                  </Text>
                  <Text style={styles.priceNumber}>
                    {' '}
                    RapidClick Price: {this.props.rapidPrice}{' '}
                  </Text>
                  <Text style={styles.information2}> x5 dmg every .1 sec </Text>
                  <Text style={styles.information2}>
                    {' '}
                    x2 gold every .1 sec{' '}
                  </Text>
                </View>

                <View style={styles.buyItem}>
                  <TouchableOpacity
                    onPress={() => this.props.increaseRapid()}
                    style={styles.buyButton}
                  >
                    <Text style={styles.buy}> Upgrade </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={toggleShop.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>Play Game</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleHighscore.bind(this)}
              style={styles.bottomButtons}
            >
              <Text style={styles.footerButtons}>LeaderBoard</Text>
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
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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

function mapStateToProps(state) {
  return {
    cookies: state.cookies,
    clickerLevel: state.clickerLevel,
    clickerPrice: state.clickerPrice,
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCookies: () => dispatch({ type: 'INCREASE_COOKIES' }),
    increaseClicker: () => dispatch({ type: 'INCREASE_CLICKER' }),
    increaseGrandma: () => dispatch({ type: 'INCREASE_GRANDMA' }),
    increaseAuto: () => dispatch({ type: 'INCREASE_AUTO' }),
    increaseRapid: () => dispatch({ type: 'INCREASE_RAPID' }),
    highscore: () => dispatch({ type: '' })
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
  topContainer: {
    flex: 14 / 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  highscoreTopContainer: {
    flex: 14 / 15,
    alignItems: 'center'
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
