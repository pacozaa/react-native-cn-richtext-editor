import React, { Component } from 'react'
import {
    View,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native'

export const CNToolbarIcon = (props) => {
    const {
        size,
        backgroundColor,
        color,
        iconStyles,
        toolTypeText,
        iconComponent,
        onStyleKeyPress,
        selectedColor,
        selectedStyles,
        selectedTag,
        buttonTypes,
        selectedBackgroundColor,
    } = props
    let colorCondition = '';
    let backgroundColorCondition = '';
    let notImageDefaultStyle = '';
    if (buttonTypes === 'style') {
        backgroundColorCondition = selectedStyles.indexOf(toolTypeText) >= 0 ? selectedBackgroundColor : backgroundColor;
        colorCondition = selectedStyles.indexOf(toolTypeText) >= 0 ? selectedColor : color;
    }
    else if (buttonTypes === 'tag') {
        backgroundColorCondition = selectedTag === toolTypeText ? selectedBackgroundColor : backgroundColor;
        colorCondition = selectedTag === toolTypeText ? selectedColor : color
    }

    if (toolTypeText !== 'image') {
        notImageDefaultStyle = {
            fontSize: size,
            color: colorCondition
        }
    }
    
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                onStyleKeyPress(toolTypeText)
            }}
        >
            <View style={[iconStyles,
                {
                    backgroundColor: backgroundColorCondition
                }]}
            >
                {
                    React.cloneElement(iconComponent, {
                        size,
                        color: colorCondition,
                        style: [
                            notImageDefaultStyle,
                            iconComponent.props.style || {}
                        ]
                    })
                }
            </View>
        </TouchableWithoutFeedback>
    )
}
