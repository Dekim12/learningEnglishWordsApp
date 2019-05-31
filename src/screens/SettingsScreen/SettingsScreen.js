import React, { Component, } from 'react'
import { Text, View, ScrollView, TextInput, } from 'react-native'
import uuidv4 from 'uuid/v4'
import { TouchableButton, } from '../../components'
import styles from './style'

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Tasks Settings',
    headerTitleContainerStyle: {
      marginRight: 40,
    },
  }

  generateTagsItems = tagsList => tagsList.map((tag) => {
    const addTag = () => {}

    return (
      <TouchableButton style={styles.tagItem} onPress={addTag} key={uuidv4()}>
        <Text style={styles.textStyle}>{tag}</Text>
      </TouchableButton>
    )
  })

  render() {
    const { tagsList, } = this.props
    const {
      container,
      definition,
      tagsBlock,
      tagItem,
      wordsBlock,
      valueStyle,
      inputStyle,
      textStyle,
      orderItem,
      editBtn,
      editText,
    } = styles

    return (
      <ScrollView
        style={container}
        contentContainerStyle={{ alignItems: 'center', }}
      >
        <Text style={definition}>TAGS FOR TRAINING</Text>
        <View style={tagsBlock}>{this.generateTagsItems(tagsList)}</View>
        <TouchableButton
          style={[tagItem, { paddingHorizontal: 110, marginBottom: 35, }]}
        >
          <Text style={textStyle}>All Tags</Text>
        </TouchableButton>
        <View style={wordsBlock}>
          <Text style={definition}>AMOUNT OF WORDS - </Text>
          <Text style={valueStyle}>245</Text>
        </View>
        <View style={[wordsBlock]}>
          <Text style={definition}>FOR TRAINING - </Text>
          <TextInput
            style={inputStyle}
            defaultValue='20'
            placeholder='Number'
            keyboardType='numeric'
            placeholderTextColor='white'
            autoCorrect={false}
            clearButtonMode='always'
            underlineColorAndroid='transparent'
            autoCapitalize='words'
            onChangeText={this.handleChangeText}
          />
        </View>
        <Text style={[definition, { marginTop: 35, }]}>WORDS ORDER</Text>
        <View style={tagsBlock}>
          <TouchableButton style={orderItem}>
            <Text style={textStyle}>sequential</Text>
          </TouchableButton>
          <TouchableButton style={orderItem}>
            <Text style={textStyle}>random</Text>
          </TouchableButton>
        </View>
        <TouchableButton style={editBtn} onPress={this.edit}>
          <Text style={editText}>CONFIRM</Text>
        </TouchableButton>
      </ScrollView>
    )
  }
}

export { SettingsScreen, }
