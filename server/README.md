# Private Progress Server

Run `npm.cmd run server` from the repository root.

The server creates `server/data/until-sunrise.db` on first run. It permits exactly one account, named `Ngọc Anh`, created through the product app's first-visit flow. It stores a bcrypt password hash and one saved scene identifier.

Set `JWT_SECRET` to a long random value before deployment. The local default is for development only.
