## Task 1 : Backend using JSON

1. Update the [sample-data.json](./day3/mock-backend/sample-data.json) to match your data.
    - You can think of the different entities you want to have in your application, and add those entites as top-level keys in the JSON file.
    - You can link between different entities using the `id` field. For example, if you have a `projects` entity and a `users` entity, you can have a `userId` field in the `projects` entity to link to the `users` entity.
2. Run the following command in PowerShell:
    `npx json-server sample-data.json --host 0.0.0.0`
3. If it fails, create the required folder by running this in PowerShell:
    `mkdir $env:USERPROFILE\AppData\Roaming\npm`
4. Install REST Client. [Link to REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). You can search for `REST Client` in the extensions tab in VSCode.
5. Use the [requests.http](./day3/mock-backend/requests.http) file to test the API.
