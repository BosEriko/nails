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

## Scoping Projects
There may be times where you want to use the same Firebase project on different Nails repository. This is where `COLLECTION_SCOPE` can come in handy. You can set up `COLLECTION_SCOPE` on your `.env` and Nails is smart enough to detect if it exists and if it does, it will prepend all collection names on Firestore with `COLLECTION_SCOPE`. For Example `UserActivity`, on Firestore instead of `userActivities`, if `COLLECTION_SCOPE` is set to `list`, it will be named `list__userActivities` on Firestore.
