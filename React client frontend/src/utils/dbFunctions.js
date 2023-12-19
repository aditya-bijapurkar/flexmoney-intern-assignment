const BACKEND_URL = "https://determined-flip-flops-colt.cyclic.app/";

export const registerNewMember = async (member) => {
  const res = await fetch(`${BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

  const result = await res.json();
  return result;
};

export const signinMember = async (member) => {
  const res = await fetch(`${BACKEND_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

  const result = await res.json();
  return result;
};

export const updateBatch = async (member) => {
  const res = await fetch(`${BACKEND_URL}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });

  const result = await res.json();
  return result;
};
