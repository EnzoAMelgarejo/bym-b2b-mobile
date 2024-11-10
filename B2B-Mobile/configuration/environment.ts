import Config from 'react-native-config'

export const environment = {
    SERVER_URL: Config.SERVER_URL ?? 'http://192.168.1.224:3000'
}