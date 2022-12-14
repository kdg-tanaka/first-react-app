# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

```
//
const [***, set***] = useState('');
const onChange*** = (e:ChangeEvent<HTMLInputElement>) => set***(e.target.value)
<Input onChange={onChange***}>***</Input>

//
const getUsers = useCallback(() => {
  axios
    .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch(() => {
      alert("error");
    })
    .finally(() => {
    })
}, [])

// loadingがtrueの時 → doSomethingA、falseの時 → doSomethingB
{loading ? (doSomethingA) : (doSomethingB)}

// isAdminがtrueの時 → doSomething
{isAdmin && (doSomething)}

// isAdminがfalseの時 → isReadonlyが有効
<Input value="xxx" isReadonly={!isAdmin}>

// user?.nameがnullもしくはundefinedの時 → 空文字を挿入（stringを指定）
setName(user?.name ?? '');

// isAdminは必須じゃない＆デフォルトfalse
type Props = {
  user: User | null; //User配列またはnull
  isOpen: boolean;
  isAdmin?: boolean; //isAdminは必須じゃない
  onClose: () => void;
}

export const xxx = () => {
  const { user, isOpen, isAdmin = false, onClose } = props;
  ......
}

//
git status
git add .
git status
git commit -m "xxxxxx"
git branch --contains
git push origin master
```
