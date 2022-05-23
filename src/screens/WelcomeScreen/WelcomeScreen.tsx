import {Center, Spinner, Image, Box, Flex} from 'native-base';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MemberCard from '../../components/MemberCard/MemberCard';
import Images from '../../assets/img/images';

const DELAY = 1;

const WelcomeScreen = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowLoading(false), DELAY * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {showLoading ? (
        <Center bgColor={'black'} flex={1}>
          <Image source={Images.logo.long} alt="logoText" />
          <Spinner size="lg" paddingTop="5" />
        </Center>
      ) : (
        <Box bgColor={'black'} flex={1}>
          <Center position="relative">
            <Image
              source={Images.logo.long}
              alt="logoText"
              size={120}
              resizeMode={'contain'}
            />
          </Center>
          <Icon
            name="edit"
            color="white"
            size={30}
            style={{position: 'absolute', right: 0, top: 50}}
          />
          <Flex
            direction="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
            px="8">
            <MemberCard
              memberType="Normal Member"
              imageName={Images.member.normal}
            />
            <MemberCard
              memberType="Gold Member"
              imageName={Images.member.gold}
            />
            <MemberCard memberType="Vip Member" imageName={Images.member.vip} />
            <MemberCard
              memberType="Kids Member"
              imageName={Images.member.kids}
            />
            <MemberCard memberType="Add profile" icon="add" />
          </Flex>
        </Box>
      )}
    </>
  );
};

export default WelcomeScreen;
