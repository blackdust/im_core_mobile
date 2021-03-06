import React from 'react';
import { Text, View } from 'react-native';


import BasePage from 'im_core_mobile/app/component/base_page'

import Button from 'antd-mobile/lib/button'
import InputItem from 'antd-mobile/lib/input-item'
import Navbar from 'im_core_mobile/app/component/nav_bar'
import API from 'API'

class StudyPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      references : [],
    }
  }

  componentDidMount() {
    API.auth.get_ref_detail().done((res_data, res)=>{
      this.setState({
        references: res_data['references'],
      }) 
    })

  }

  render(){
    this.doms_ary = []; 
    tag_s = '';
    for(var i=0; i<this.state.references.length; i++){

      for(var j=0; j<this.state.references[i].tags.length; j++){
        tag_s += this.state.references[i].tags[j] + ","
      }
      this.doms_ary.push(
        <View key={i}>
          <Text key={this.state.references[i].name}>{this.state.references[i].name}</Text>
          <InputItem 
            value={tag_s}
            key={i}
            editable={false}
          >
          </InputItem>
        </View>
      )
    }

    return(
      <View>
        <Navbar titleContent={<Text style={{color: "#fff", fontSize: 20}}>学习</Text>}/>
        {this.doms_ary}
      </View>
    )
  }
}export default StudyPage


