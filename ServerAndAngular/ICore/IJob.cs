﻿using System.Threading;
using System.Threading.Tasks;

namespace SoupDiscover.ICore
{
    /// <summary>
    /// A job that can be added in a <see cref="JobManager"/>
    /// </summary>
    public interface IJob
    {
        /// <summary>
        /// Id of the Job
        /// This permit to known if the job is already running
        /// </summary>
        object IdJob { get; }

        /// <summary>
        /// Start the processing, and wait its finished
        /// </summary>
        /// <param name="token">The token that permit to stop the processing</param>
        void Execute();

        /// <summary>
        /// Start asynchronously the processing
        /// </summary>
        /// <param name="token">The token that permit to stop the processing</param>
        Task<IJob> ExecuteAsync(CancellationToken token);
    }
}
