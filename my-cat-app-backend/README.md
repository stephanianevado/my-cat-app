# My Cat App

## Prerequisites

- Install `python 3.9.7`
- Install [miniconda](https://docs.conda.io/en/latest/miniconda.html)

## Create conda environment

`conda create --name cat`

### Enter the environment

`conda activate cat`

## Install postgresql via conda

`conda install -y -c conda-forge postgresql`

## Create a base database locally

`initdb -D my_cat_db`

## Start the server modus/instance of postgres

`pg_ctl -D my_cat_db -l logfile start`

## Create a non-superuser

`createuser --encrypted --pwprompt steph`

Enter name and password

## Use this super user, create inner database inside the base database

`createdb --owner=steph my_cat_db`

## Access to inner database

`psql my_cat_db`

## Migrations
`\i /.../my-cat-app/my-cat-app-backend/migrations/1_create_table_cats.sql`

## Run app
`uvicorn main:app --reload`



