<template>
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="login_show_alert"
    :class="login_alert_varient"
  >
    {{ login_alert_msg }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
import { mapActions } from 'pinia'
import UseUserStore from '@/stores/user'

export default {
  name: 'LoginForm',
  data() {
    return {
      login_in_submission: false,
      login_show_alert: false,
      login_alert_varient: 'bg-blue-500',
      login_alert_msg: 'Please wait. logging in',
      loginSchema: {
        email: 'required|min:3|max:100|email',
        password: 'required|min:3|max:40|excluded:password'
      }
    }
  },
  props: {
    tab: String
  },
  methods: {
    ...mapActions(UseUserStore, ['authenticate']),
    async login(values) {
      console.log(values)
      this.login_show_alert = true
      this.login_in_submission = true
      this.login_alert_varient = 'bg-blue-500'
      this.login_alert_msg = 'Please wait. logging in'

      try {
        await this.authenticate(values)
      } catch (error) {
        this.login_in_submission = true
        this.login_alert_varient = 'bg-red-500'
        this.login_alert_msg = error.message
        return
      }

      this.login_alert_varient = 'bg-green-500'
      this.login_alert_msg = 'Success! logged in'
      window.location.reload()
    }
  }
}
</script>
