import { connect } from 'react-redux';
import {cityWeather, removeCity} from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = state => {
  return {
    cityWeather: state.cityWeatherReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeClickedCity: (index) => {
      dispatch(removeCity(index))
    },
    getPinned: (json)=>{
      dispatch(cityWeather(json))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
