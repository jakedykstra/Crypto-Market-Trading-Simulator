import React, { useState, useEffect } from 'react';
import axios from 'axios';
  
  // gets our users id
export default function userId(props) {
  const [userId, setUserId] = useState();

  const updateId = (props) => setUserId(props);

  useEffect(() => {
    axios.get("/api/user").then((user) => {
    });
  }, []);

  return [userId, updateId];
}
