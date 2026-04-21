# Nails
Rails Inspired NextJS Template.

## Generate a Nails Project
```sh
npm create nails my-nails-app
# or with yarn
yarn create nails my-nails-app
```

## Run Project Locally
```sh
yarn install
yarn develop
```

## ENV
```sh
cp example.env .env.local
```

## Generate New Model
You can generate a new model using the command below:
```sh
# Generate a new model called UserActivity
yarn nails generate model UserActivity
```

## Generate New Scaffold
You can generate a new scaffold using the command below:
```sh
# Generate a new scaffold called UserActivity
yarn nails generate scaffold UserActivity
```

## Collection Scope
There may be situations where you need to use the same Firebase project across multiple Nails repositories. In these cases, `COLLECTION_SCOPE` can be useful.

By setting `COLLECTION_SCOPE` in your `.env.local` file, Nails will automatically detect it and prefix all Firestore collection names with its value.

For example, if you have a collection named `UserActivity`, it would normally map to `userActivities` in Firestore. However, if `COLLECTION_SCOPE` is set to `list`, the resulting collection name will become `list__userActivities`.
