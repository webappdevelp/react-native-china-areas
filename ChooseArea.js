import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ScrollView,
  StyleSheet,
  NativeModules
} from 'react-native';
import Arrow from './components/Arrow/index'
import ChinaAreaPikcer from './components/ChinaAreaWheelPicker/index'
import SaveBtn from './components/Button/index'

class ChooseArea extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      selectedAreaData: {
        province_id: '110000',
        city_id: '110100',
        area_id: '110101',
        province: '',
        city: '',
        area: '',
      }
    }
    this.openArressModal = this.openArressModal.bind(this)
    this.getChangedAreas = this.getChangedAreas.bind(this)
  }

  openArressModal () {
    this.setState({
      modalVisible: true
    })
  }

  getChangedAreas (area) {
    this.setState({
      modalVisible: false,
      selectedAreaData: {
        province_id: area.provinceId,
        city_id: area.cityId,
        area_id: area.areaId,
        province: area.provinceText,
        city: area.cityText,
        area: area.areaText,
      },
    })
  }

  saveArea () {
	  console.log(this.state.selectedAreaData)
  }


  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.areaWrap} isHandlerPress={true} onPress={this.openArressModal}>
			<Text style={styles.areaLabel}>所在地址：</Text>
			<Text style={[styles.areaLabel, styles.areaHolder, this.state.selectedAreaData.province ? {} : styles.areaPlaceHolder]}>
			  { this.state.selectedAreaData.province ? `${this.state.selectedAreaData.province} ${this.state.selectedAreaData.city} ${this.state.selectedAreaData.area}` : '请选择地址' }
			</Text>
			<Arrow style={styles.arrow} />
		  </View>
		  <ChinaAreaPikcer
			visible={this.state.modalVisible}
			selectedProvince={this.state.selectedAreaData.province_id}
			selectedCity={this.state.selectedAreaData.city_id}
			selectedArea={this.state.selectedAreaData.area_id}
			handleChanged={this.getChangedAreas}/>
		  <SaveBtn buttonStyle={styles.areaButton} text={'保存'} callback={this.saveArea.bind(this)} />
      </View>
    )
  }
}

AppRegistry.registerComponent('ChooseArea', () => ChooseArea)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  areaWrap: {
    marginTop: 10,
    height: 48,
    paddingHorizontal: 14,
    paddingLeft: 14,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  areaLabel: {
    paddingVertical: 15,
    fontSize: 15,
    color: '#333',
  },
  areaHolder: {
    flex: 1,
  },
  areaPlaceHolder: {
    color: '#bbb',
  },
  areaButton: {
    marginTop: 24,
    marginHorizontal: 14,
  },
  arrow: {
    position: 'absolute',
    right: 14,
    top: 19,
  }
})