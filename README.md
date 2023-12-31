
# Yoga Classes Website
### All the backend and frontend source code is available in 'Node server backend' and 'React client frontend' folders respectively present in this repository!

#### hosted website: https://flexmoney-intern-assignment.netlify.app/
#### server: https://determined-flip-flops-colt.cyclic.app/

This is a full-stack (MERN) website which registers members to a yoga class which has a per-month-basis subscription.

### Steps: 
1) Register as a new member
2) You will be redirected to the sign-in page
3) Sign in to your account

### Tech stack:
- MongoDB -> NoSQL database
-  Node + Express -> backend server (hosted on https://www.cyclic.sh)
-  React + vite -> frontend client (hosted on https://www.netlify.com/)

- REST API -> for cross origin communication.

## Dataflow and Database model 

![Alt text](https://github.com/aditya-bijapurkar/flexmoney-intern-assignment/blob/main/data.png?raw=true)


### node-schedule (to change batch after the month is over)
- All the batches are updated in the 'nextBatch' field in the mongodb collection
- using nnode-schedule module (scheduleJob function) on the 1st day of every month the 'batch' field gets 'nextBatch' field's value and 'nextBatch' becomes null.


## API Calls
#### update body before calling

##### Register a new member

```http
  Post /register
```

##### Sign in for an existing member

```http
  POST /signin
```

##### Update batch

```http
  POST /update
```

## Assumptions
- 'CompletePayment()' mock function always runs and succeeds after each new registration.
- Payment is done on a recurring basis automatically on the 1st of each month.
