<template>
  <div class="container">
    <table>
      <thead>
        <th>Name</th>
        <th>lastname</th>
        <th>email</th>
        <th>validated</th>
        <th>validation date</th>
        <th>Validate User</th>
        <th>Generate JWT Token</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.user_id">
          <td>{{ user.name }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.validated }}</td>
          <td>{{ user.validation_date }}</td>
          <td>
            <button
              v-if="!user.validated"
              type="button"
              class="btn btn-primary"
              @click="emailValidation(user.email, user.user_id)"
            >
              Validate User
            </button>
            <button v-else type="button" disabled class="btn btn-secondary">
              User Validated
            </button>
          </td>

          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="generateToken(user.user_id)"
            >
              Generate Token
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h5>{{ token }}</h5>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      token: null,
    };
  },
  methods: {
    getUsers() {
      axios
        .get("http://127.0.0.1:4000/users", {
          "Content-Type": "application/json",
        })
        .then((response) => {
          this.users = response.data;
        });
    },
    emailValidation(email, user_id) {
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .put("http://127.0.0.1:4000/validateUser", { email, user_id }, headers)
        .then((response) => {
          if (response.data.accepted) {
            this.getUsers();
            alert("User validated");
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
    generateToken(id) {
      axios
        .post(
          "http://127.0.0.1:4000/generateToken",
          { user_id: id },
          {
            "Content-Type": "application/json",
          }
        )
        .then((response) => (this.token = response.data));
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>
<style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

tr td,
tr th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
