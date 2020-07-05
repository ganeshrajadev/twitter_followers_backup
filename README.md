# Twitter Followers Backup and Visualize

This is a simple project to store twitter followers count and visualize it.

## Usage

Clone the project

create a .env file inside the cloned repo

```bash
npm install 
```
update twitter access and consumer keys
```
consumer_key=''
consumer_secret=''
access_token_key=''
access_token_secret=''
```

update the Mongo database URL you want to update

```
database_url=''
```

Add the script to crontab to fetch data every hour

```bash
0 * * * * node /path_of_cloned_repo/
```

## Pending 
- [x] Store data into MongoDB
- [ ] Display Data as Charts


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)