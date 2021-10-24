<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'from', 'to', 'total_budget', 'daily_budget', 'creatives'];


    /**
     * Make a string with array of creatives
     * @param array|string $value
     * @return string
     */
    public function setCreativesAttribute($value) {
        if (empty($value)) {
            $value = null;
        }
        else if (is_array($value)) {
            $value = implode("|", $value);
        }
        $this->attributes['creatives'] = $value;
    }

    /**
     * Return array of creatives
     * @param string $value
     * @return array $creatives
     */
    public function getCreativesAttribute($value) {
        if (empty($value)) {
            return [];
        }
        return explode("|", $value);
    }

    /**
     * Convert data format from mm/dd/yyyy to yyyy-mm-dd
     * @param string $value date format
     */
    public function setFromAttribute($value) {
        if (isset($value))
            $this->attributes['from'] = date('Y-m-d', strtotime($value));
    }

    /**
     * Convert data format from yyyy-mm-dd to mm/dd/yyyy
     * @param string $value data format
     * @return string $value data format
     */
    public function getFromAttribute($value) {
        if (isset($value))
            return date('m/d/Y', strtotime($value));
        return $value;
    }

    /**
     * Convert data format from mm/dd/yyyy to yyyy-mm-dd
     * @param string $value date format
     */
    public function setToAttribute($value) {
        if (isset($value))
            $this->attributes['to'] = date('Y-m-d', strtotime($value));
    }

    /**
     * Convert data format from yyyy-mm-dd to mm/dd/yyyy
     * @param string $value data format
     * @return string $value data format
     */
    public function getToAttribute($value) {
        if (isset($value))
            return date('m/d/Y', strtotime($value));
        return $value;
    }
}
