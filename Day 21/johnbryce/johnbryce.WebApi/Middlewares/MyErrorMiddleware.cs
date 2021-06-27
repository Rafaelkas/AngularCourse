using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace johnbryce.WebApi.Middlewares
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class MyErrorMiddleware
    {
        private readonly RequestDelegate _next;

        public MyErrorMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {
            try
            {
                await _next(httpContext);
            }
            catch (Exception ex)
            {
                //return nice html page with error details
            }
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class MyErrorMiddlewareExtensions
    {
        public static IApplicationBuilder UseMyErrorMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<MyErrorMiddleware>();
        }
    }
}
