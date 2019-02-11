import React, { useState, useEffect } from 'react';
import axios from 'axios';
  
  // gets our users id
export default userId = (userId) => {
  const [userId, setUserId] = useState(null);

    const getId = async = () => {
      await axios.get("/api/user").then((user) => {
      return user;
  });
}

  useEffect(() => {
    setUserId(getId());
  }, userId);


  return userId
}
