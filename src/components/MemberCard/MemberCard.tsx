import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Image, Text} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootStackParams} from '../../navigations/AppNavigation';

interface MemberCardProps {
  imageName?: string;
  icon?: string;
  memberType: string;
}
const MemberCard: React.FC<MemberCardProps> = props => {
  const {imageName, memberType, icon} = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Button variant="ghost" onPress={() => navigation.navigate('Home')}>
      {imageName ? (
        <Image
          source={imageName}
          alt="logoText"
          size={100}
          resizeMode={'contain'}
        />
      ) : null}
      {icon ? <Icon name={icon} color="white" size={70} /> : null}
      <Text fontSize="md" color="white" fontWeight="bold" pt="2">
        {memberType}
      </Text>
    </Button>
  );
};

export default MemberCard;
