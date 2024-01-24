import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Upload from './../screen/uploaddoc/Upload'; // Pastikan Anda mengimpor komponen UploadPdf dari file yang benar
import Login from '../screen/loginscreen/Login';
import Bantuan from '../bantuan/Bantuan';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelPosition: 'beside-icon', // Menyusun label di sebelah ikon
          tabStyle: {flexDirection: 'row', justifyContent: 'space-between'}, // Mengatur tata letak tombol
        }}>
        <Tab.Screen
          name="Bantuan"
          component={Bantuan} // Gantilah dengan komponen yang sesuai untuk Bantuan
          options={{
            tabBarIcon: ({color}) => (
              // Ikon untuk tab Bantuan
              <YourIconComponent
                name="help-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={Upload}
          options={{
            tabBarIcon: ({color}) => (
              // Ikon untuk tab UploadPdf
              <YourIconComponent name="file-upload" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Logout"
          component={Login} // Gantilah dengan komponen yang sesuai untuk Logout
          options={{
            tabBarIcon: ({color}) => (
              // Ikon untuk tab Logout
              <YourIconComponent name="logout" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
