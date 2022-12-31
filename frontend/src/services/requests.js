const API_URL = process.env.API_URL || 'http://localhost:3000';

const requests = {
  async getAllOrders() {
    const response = await fetch(`${API_URL}/orders`);
    const orders = await response.json();
    return orders;
  },
};

module.exports = requests;
