<?php
namespace App\Jobs;

use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SendBirthdayMessageJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public User $user)
    {

    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {

        logger("Happy Birthday {$this->user->name}");

    }
}
