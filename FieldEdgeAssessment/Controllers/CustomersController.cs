using FieldEdgeAssessment.Model;
using FieldEdgeAssessment.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace FieldEdgeAssessment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ICustomerService _customerService;
        public CustomersController(IConfiguration configuration, ICustomerService customerService) {
            _configuration= configuration;
            _customerService= customerService;
        }
        [HttpGet]   
        public async Task<IList<Customer>> Get() {

            return await _customerService.GetCustomers();            
            
        }
        [HttpGet("{id:int}")]
        public async Task<Customer> Get(string id)
        {
            return await _customerService.GetCustomerbyId(id);
        }
        [HttpDelete]
        public  void Delete(string id)
        {
             _customerService.DeleteCustomer(id);
        }
        [HttpPost]
        public void Post(Customer customer)
        {
            _customerService.AddCustomer(customer);
        }
        [HttpPut]
        public void Put(Customer customer)
        {
            _customerService.UpdateCustomer(customer);
        }

    }
}
