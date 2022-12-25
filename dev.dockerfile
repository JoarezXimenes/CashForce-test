FROM mariadb:10.4.13

ADD init.sql /docker-entrypoint-initdb.d/ddl.sql