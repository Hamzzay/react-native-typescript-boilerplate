npm i react-native-bootsplash <--- added for splash screen
app icon added
react-native-vector icons added
react-native-global-fonts added <---Poppins.ttf
react-navigations added
react-redux toolkit added
persitor added
- @react-navigation/native-stack added 
- @react-navigation/drawer added
- @react-navigation/bottom-tabs added
Language translation react-i18next  and i18next added
eslint-plugin-react-native added also replace the .estlintrc.js file with this code 

{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}

<=======================================================>
