#!/usr/bin/bash
#
#

export PGPASSWORD=db5432

option=$1
database_name=$2

if [[ "$database_name" == "" ]]; then
		database_name=testdb
fi

create_db() {
	createdb -U postgres -h localhost -O postgres -p 5432 -w "$database_name"
}

drop_db() {
	dropdb --if-exists -U postgres -h localhost -p 5432 -w "$database_name"
}

proxy() {
	if [[ "$option" == "create" ]]; then
		create_db
	elif [ "$option" == "drop" ]; then
		drop_db
	else
		echo "Usage: $0 [create|drop]"
		exit 1
	fi
}

proxy "$@"
